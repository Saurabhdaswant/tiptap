import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";

const EditorComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<EditorJS>();

  const intializeEditor = async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const List = (await import("@editorjs/list")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          list: List,
        },
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await intializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  return <div className="bg-white text-black h-full w-full" id="editorjs" />;
};

export default EditorComponent;
