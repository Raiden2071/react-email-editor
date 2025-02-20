import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import styles from './EmailEditor.module.scss';
import { useRef, useState } from 'react';
import parse from 'html-react-parser';
import { applyStyle } from './email-format';
import { FormatText } from './enums';

function EmailEditor() {
  const [text, setText] = useState(`Hey, Text!! <b>Lorem</b> ipsum dolor sit amet consectetur, adipisicing elit. Magnam doloremque rerum vitae repellendus nam vero itaque unde asperiores sapiente assumenda modi veritatis illo incidunt impedit quas, neque nulla voluptatibus labore.`);
  const [startSelection, setStartSelection] = useState(0);
  const [endSelection, setEndSelection] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const getSelectionText = () => {
    if (!textRef.current) return;

    setStartSelection(textRef.current?.selectionStart);
    setEndSelection(textRef.current?.selectionEnd);
  };

  const formatText = (formatText: FormatText): void => {
    const selectedText = text.substring(startSelection, endSelection);
    
    if (!selectedText) return;

    const startText = text.substring(0, startSelection);
    const endText = text.substring(endSelection);

    setText(startText + applyStyle(formatText, selectedText) + endText);
  };

  return (
    <div>
      <h1>Email Editor</h1>

      <div className={styles.card}>
        <div className={styles.header}>
          <div>New Message</div>
        </div>

        <div className={styles.bodyEditor}>
          <div className={styles.subject}>
            <div>From:&nbsp;</div>
            <div>danilchakv@gmail.com</div>
          </div>
          <div className={styles.subject}>
            <div>Subject</div>
          </div>

          <div className={styles.htmlEditor}>{parse(text)}</div>

          <textarea
            ref={textRef}
            className={styles.textAreaEditor}
            value={text}
            onClick={getSelectionText}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.tools}>
            <button>
              <Eraser size={17} onClick={() => formatText(FormatText.Erase)} />
            </button>
            <button>
              <Bold size={17} onClick={() => formatText(FormatText.Bold)} />
            </button>
            <button>
              <Italic size={17} onClick={() => formatText(FormatText.Italic)} />
            </button>
            <button>
              <Underline size={17} onClick={() => formatText(FormatText.Underline)} />
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  )
}

export default EmailEditor;
