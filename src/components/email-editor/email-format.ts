import { FormatText } from "./enums";

export const applyStyle = (type: FormatText, selectedText: string) => {
  return {
    [FormatText.Bold]: `<b>${selectedText}</b>`,
    [FormatText.Italic]: `<i>${selectedText}</i>`,
    [FormatText.Underline]: `<u>${selectedText}</u>`,
    [FormatText.Erase]: ``,
  }[type];
};