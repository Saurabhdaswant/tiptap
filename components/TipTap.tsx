import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "w-full rounded-md resize-none border-[#3c3c3c] bg-[#2A2A2A] p-3   text-[#a2a2a2] placeholder-[#a2a2a2] focus:border-[#3c3c3c] focus:bg-[#1a1a1a]  focus:outline-none focus:ring-0",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
