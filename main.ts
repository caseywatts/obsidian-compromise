import { Editor, Plugin } from "obsidian";
import nlp from 'compromise';

export default class InsertLinkPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "pluralize",
      name: "Pluralize",
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).nouns().toPlural().text();
				editor.replaceSelection(editedText);
      },
    });
  }
}