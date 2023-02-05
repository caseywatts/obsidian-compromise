# Text Editing Commands via [Compromise](https://github.com/spencermountain/compromise)

*An Obsidian Plugin*

We're always doing the same text edits over and over again.

Any single change is fine -- but when you have to change a BUNCH of these across a whole sentence or paragraph, it can add up!

Can't the computer help us do these super-common changes?? (yes!)

This plugin uses the [compromise](https://github.com/spencermountain/compromise) library to automate these changes.

```
don't -> do not
4 -> four
four -> 4
5th -> fifth
seventh -> 7th
cacti -> cactus
cups of coffee -> cup of coffee
I will go to the store -> I went to the store
I will do it -> I will not do it
2/3 -> two thirds
two thirds -> 2/3
2, 3, 4 -> 1, 2, 3
```

## Installation

1. clone this repo to `.obsidian/plugins`
2. Restart Obsidian
3. enable the plugin in the settings

## List of Commands

Usage:

1. Highlight the text you want to change
2. Run the command, either way:
    1. Command Palette
        1. Open the command palette (`cmd + p`)
        2. Type the name of the command
    2. Hotkeys (assign your own! the defaults here are bad so far -- what should they be?)

* Nouns
  * Pluralize `cat and dog -> cats and dogs`
  * Singularize `cats and dogs -> cat and dog`
* Sentence Tense
  * To Past Tense `I will eat lunch -> I ate lunch`
  * To Present Tense `I will eat lunch -> I eat lunch`
  * To Future Tense `I ate lunch -> I will eat lunch`
* Negative/Positive
  * To Negative `I will do it -> I will not do it`
  * To Positive `I will not do it -> I will do it`
* Contractions
  * Expand Contractions `can't -> can not`
  * Contract Contractions `can not -> cann't` (warning: janky)
* Cases
  * To Uppercase `hello -> HELLO`
  * To Lowercase `Hello -> hello`
  * To Title Case `hello -> Hello`
  * To Camel Case `hi there -> hiThere`
* Numbers
  * Digits to Words `5 -> five` or `5th -> fifth` or `3/4` to `three fourths`
  * Words to Digits `five -> 5` or `fifth -> 5th`
  * Ordinal to Cardinal `5 -> 5th` or `five -> fifth`
  * Cardinal to Ordinal `5th -> 5` or `fifth -> five`
* Math
  * Increment Numbers `1, 2, 3 -> 2, 3, 4`
  * Decrement Numbers `2, 3, 4 -> 1, 2, 3`
* Acronyms
  * Add Periods `FBI -> F.B.I.`
  * Remove Periods `F.B.I. -> FBI`