import { Editor, Plugin } from "obsidian";
import nlp from 'compromise';

export default class CompromiseTextEdits extends Plugin {
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

		this.addCommand({
      id: "sentence-prepend",
      name: "Sentence Prepend",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "i" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).sentences().prepend("Yeah,").all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "sentence-append",
      name: "Sentence Append",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "d" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).sentences().append("right").all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-lower-case",
      name: "To Lowercase",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "l" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).toLowerCase().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-upper-case",
      name: "To Uppercase",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "u" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).toUpperCase().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-title-case",
      name: "To Title Case",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "t" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).toTitleCase().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "to-camel-case",
      name: "To Camel Case",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "c" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).toCamelCase().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "number-to-digits",
      name: "Number To Digits",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "m" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).numbers().toNumber().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "number-to-cardinal",
      name: "Number To Cardinal (no th)",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "d" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).numbers().toCardinal().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "number-to-ordinal",
      name: "Number To Ordinal (th)",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "o" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).numbers().toOrdinal().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "number-to-text",
      name: "Number To Text",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "x" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).numbers().toText().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "fraction-to-decimal",
      name: "Fraction To Decimal",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "l" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).fractions().toDecimal().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "fraction-to-percentage",
      name: "Fraction To Percentage",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "n" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).fractions().toPercentage().all().text();
				editor.replaceSelection(editedText);
      },
    });

		// this.addCommand({
    //   id: "percentage-to-fraction",
    //   name: "Percentage To Fraction",
		// 	hotkeys: [{ modifiers: ["Mod", "Shift"], key: "n" }],
    //   editorCallback: (editor: Editor) => {
    //     const selectedText = editor.getSelection();
		// 		const editedText = nlp(selectedText).percentages().toFraction().all().text();
		// 		editor.replaceSelection(editedText);
    //   },
    // });

		this.addCommand({
      id: "expand-contractions",
      name: "Expand Contractions",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "e" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).contractions().expand().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "contract-contractions",
      name: "Contract Contractions",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "c" }],
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).contract().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "numbers-increment",
      name: "Number Increment",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "=" }], // = because + shares a key
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).numbers().increment().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "numbers-decrement",
      name: "Number Decrement",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "-" }], //
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).numbers().decrement().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "acronym-with-periods",
      name: "Acronyms With Periods",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "." }], //
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).acronyms().addPeriods().all().text();
				editor.replaceSelection(editedText);
      },
    });

		this.addCommand({
      id: "acronym-without-periods",
      name: "Acronyms Without Periods",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "," }], //
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();
				const editedText = nlp(selectedText).acronyms().strip().all().text();
				editor.replaceSelection(editedText);
      },
    });

  }
}