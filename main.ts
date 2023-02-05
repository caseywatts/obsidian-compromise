import { Editor, Plugin } from "obsidian";
import nlp from 'compromise';

export default class InsertLinkPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "pluralize",
      name: "Pluralize",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "p" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).nouns().toPlural().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "singularize",
      name: "Singularize",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "s" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).nouns().toSingular().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-past-tense",
      name: "To Past Tense",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "1" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).sentences().toPastTense().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-present-tense",
      name: "To Present Tense",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "2" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).sentences().toPresentTense().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-future-tense",
      name: "To Future Tense",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "3" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).sentences().toFutureTense().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-negative",
      name: "To Negative",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "g" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).sentences().toNegative().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-positive",
      name: "To Positive",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "z" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).sentences().toPositive().all().text();
				editor.replaceSelection(editedText);
      },
    });

  }
}