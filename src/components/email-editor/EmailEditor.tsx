import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import styles from './EmailEditor.module.scss';
import { useRef, useState } from 'react';

function EmailEditor() {
  const [text, setText] = useState(`
              Hey, Text!! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Magnam doloremque rerum vitae repellendus nam vero itaque unde asperiores
          sapiente assumenda modi veritatis illo incidunt impedit quas, neque nulla voluptatibus labore.
  `);

  // TODO: винести у окремий хук
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const getSelectionText = () => {
    if (!textRef.current) return;

    const cursorStart = textRef.current?.selectionStart;
    const cursorEnd = textRef.current?.selectionEnd;
    const selectedText = text.substring(cursorStart, cursorEnd);

    if (!selectedText) return;
  };

  return (
    <>
      <h1>Email Editor</h1>

      <div className={styles.card}>
        <textarea
          ref={textRef}
          contentEditable
          className={styles.editor}
          value={text}
          onClick={getSelectionText}
          onChange={(e) => setText(e.target.value)}
        />

        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}>
              <Eraser size={17} />
            </button>
            <button>
              <Bold size={17} />
            </button>
            <button>
              <Italic size={17} />
            </button>
            <button>
              <Underline size={17} />
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>

    </>
  )
}

export default EmailEditor;
