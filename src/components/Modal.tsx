import React from 'react';
import { X } from "@/utils/icons"


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, showCloseButton }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                {showCloseButton && <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}><X weight='bold' size={18} /></button>}
                {children}
            </div>
        </div>
    );
};

export default Modal;
