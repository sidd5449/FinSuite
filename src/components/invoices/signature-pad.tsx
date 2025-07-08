'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pen, Eraser } from 'lucide-react';

interface SignaturePadProps {
  onSave: (dataUrl: string) => void;
  width?: number;
  height?: number;
  initialDataUrl?: string;
}

export default function SignaturePad({ onSave, width = 400, height = 200, initialDataUrl }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(!!initialDataUrl);

  const getContext = () => canvasRef.current?.getContext('2d');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      const context = getContext();
      if (context) {
        context.scale(ratio, ratio);
        context.strokeStyle = '#333';
        context.lineWidth = 2;
        context.lineCap = 'round';
        context.lineJoin = 'round';

        if (initialDataUrl) {
            const image = new Image();
            image.onload = () => {
                context.drawImage(image, 0, 0);
            };
            image.src = initialDataUrl;
        }
      }
    }
  }, [width, height, initialDataUrl]);

  const getCoords = (event: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (event instanceof MouseEvent) {
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }
    if (event.touches[0]) {
      return { x: event.touches[0].clientX - rect.left, y: event.touches[0].clientY - rect.top };
    }
  };

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const coords = getCoords(event.nativeEvent);
    if (coords) {
      const context = getContext();
      context?.beginPath();
      context?.moveTo(coords.x, coords.y);
      setIsDrawing(true);
      setHasSigned(true);
    }
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const coords = getCoords(event.nativeEvent);
    if (coords) {
      const context = getContext();
      context?.lineTo(coords.x, coords.y);
      context?.stroke();
    }
  };

  const stopDrawing = () => {
    const context = getContext();
    context?.closePath();
    setIsDrawing(false);
  };

  const handleClear = () => {
    const context = getContext();
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    onSave('');
    setHasSigned(false);
  };
  
  const handleSave = () => {
    const canvas = canvasRef.current;
    if (canvas && hasSigned) {
      const dataUrl = canvas.toDataURL('image/png');
      onSave(dataUrl);
    } else {
      onSave('');
    }
    // Maybe show a toast or visual confirmation
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className="border rounded-md cursor-crosshair bg-gray-50"
      />
      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={handleClear}>
          <Eraser className="mr-2 h-4 w-4" />
          Clear
        </Button>
        <Button type="button" onClick={handleSave} className="bg-primary hover:bg-primary/90">
           <Pen className="mr-2 h-4 w-4" />
           Confirm Signature
        </Button>
      </div>
    </div>
  );
}
