import React, { useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { 
  Highlighter, 
  Code, 
  HighlighterCircle, 
  ListBullets, 
  ListNumbers, 
  TextAlignCenter, 
  TextAlignJustify, 
  TextAlignLeft, 
  TextAlignRight, 
  TextB, 
  TextHOne, 
  TextHThree, 
  TextHTwo, 
  TextItalic, 
  TextStrikethrough, 
  TextUnderline, 
  Link as LinkIcon 
} from "@/utils/icons"

// Extensions
// import BulletList from '@tiptap/extension-bullet-list'
// import Document from '@tiptap/extension-document'
// import ListItem from '@tiptap/extension-list-item'
// import Paragraph from '@tiptap/extension-paragraph'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextLink from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { Separator } from './Separator';
import { twMerge } from 'tailwind-merge';

interface TipTapEditorProps {
  onChange: any;
  placeholder?: string;
  className?: string;
}

const TipTapEditor = ({ onChange, placeholder = "Digite seu texto...", className }: TipTapEditorProps) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState('#000'); // Cor padrão para o destaque
  const colorRef = useRef<HTMLInputElement>(null);
  const highlightRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        history: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: placeholder
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      TextLink.configure({
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
      }}),
      Underline
    ],
    // content: '<p>Hello World!</p>',
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none', // w-full max-w-full
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  const toggleHighlight = () => {
    const currentColor = editor.getAttributes('highlight').color;
    if (currentColor === color) {
      editor.chain().focus().unsetHighlight().run();
    } else {
      highlightRef.current?.click();
    }
  };

  return (
    <div className={twMerge('bg-sky-50 p-2 rounded-xl w-full h-fit', className)}>
      <EditorContent editor={editor} />
      <Separator className='my-2'/>
      <div className="flex gap-2 p-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn"><TextB size={22} /></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn"><TextItalic size={22} /></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="btn"><TextUnderline size={22} /></button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className="btn"><TextStrikethrough size={22} /></button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}><Code /></button>

        <div className='w-[1px] bg-midnight-blue-950 bg-opacity-20' />

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="btn"><TextHOne size={22} /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn"><TextHTwo size={22} /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="btn"><TextHThree size={22} /></button>

        <div className='w-[1px] bg-midnight-blue-950 bg-opacity-20' />

        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className="btn"><TextAlignLeft size={22} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className="btn"><TextAlignCenter size={22} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className="btn"><TextAlignRight size={22} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className="btn"><TextAlignJustify size={22} /></button>

        <div className='w-[1px] bg-midnight-blue-950 bg-opacity-20' />

        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn"><ListBullets size={22} /></button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="btn"><ListNumbers size={22} /></button>

        <div className='w-[1px] bg-midnight-blue-950 bg-opacity-20' />

        <button onClick={() => colorRef.current?.click()} className="btn"><HighlighterCircle size={22} /></button>
        <input
          ref={colorRef}
          type="color"
          onChange={event => editor.chain().focus().setColor(event.target.value).run()}
          value={editor.getAttributes('textStyle').color}
          // data-testid="setColor"
          className='appearance-none w-0 h-0 rounded-lg invisible border-none'
        />

        <button onClick={toggleHighlight} className="btn"><Highlighter size={22} /></button>
        <input 
          ref={highlightRef}
          type="color"
          onChange={event => editor.chain().focus().toggleHighlight({ color: event.target.value }).run()}
          value={editor.getAttributes('textStyle').color}
          className='appearance-none w-0 h-0 rounded-lg invisible border-none'
        />

        <div className='w-[1px] bg-midnight-blue-950 bg-opacity-20' />

        <button onClick={() => editor.chain().focus().setLink({ href: 'https://example.com' }).run()} className="btn"><LinkIcon size={22} /></button>
      </div>
    </div>
  );
};

export default TipTapEditor;