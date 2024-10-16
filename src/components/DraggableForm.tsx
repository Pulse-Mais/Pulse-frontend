import React, { useState } from 'react';
import { DotsSixVertical } from '@/utils/icons';

interface DraggableFormProps {
  children: React.ReactNode[];
}

const DraggableForm: React.FC<DraggableFormProps> = ({ children }) => {
  const [fields, setFields] = useState(children);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnter = (index: number) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      setPlaceholderIndex(index);
    }
  };

  const handleDragEnd = () => {
    if (draggedIndex !== null && placeholderIndex !== null) {
      const newFields = [...fields];
      const [draggedField] = newFields.splice(draggedIndex, 1);
      newFields.splice(placeholderIndex, 0, draggedField);
      setFields(newFields);
    }
    setDraggedIndex(null);
    setPlaceholderIndex(null);
  };

  return (
    <div>
      <div>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            {placeholderIndex === index && (
              <div className="placeholder p-4 mb-2 bg-gray-200 border rounded"></div>
            )}
            <div
              draggable={!isInputFocused}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              className={`p-4 mb-2 bg-white border rounded shadow ease-in cursor-grab duration-200 ${
                draggedIndex === index ? 'dragging' : ''
              } ${draggedIndex !== null && draggedIndex !== index ? 'drag-shadow' : ''}`}
            >
              <div className="flex items-center">
                <DotsSixVertical size={24} className="mr-2 cursor-pointer" />
                <div className="w-full">{field}</div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <style jsx>{`
        .draggable {
          cursor: grab;
          transition: transform 0.2s ease;
        }
        .dragging {
          cursor: grabbing;
          transition: transform 0.2s ease;
        }
        .drag-shadow {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default DraggableForm;