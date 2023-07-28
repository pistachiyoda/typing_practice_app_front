const spaceKey = " ";
const leftHandPracticeKeys = ["a", "s", "d", "f"];
const rightHandPracticeKeys = ["j", "k", "l", ";"];
const leftHandTopRowKeys = ["q", "w", "e", "r", "t"];
const rightHandTopRowKeys = ["y", "u", "i", "o", "p"];
const leftHandBottomRowsKeys = ["z", "x", "c", "v", "b"];
const nandMKeys = ["n", "m"];
const gAndHKeys = ["g", "h"];
const apostropheKeys = ["'", '"'];
const colonKeys = [";", ":"];
const commaKeys = [",", ".", "?"];
const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operatorKeys = ["+", "-"];
const underScoreAndEqualKeys = ["_", "="];
const symbolInNumbersRowKeys = ["@", "#", "$", "%", "^", "&", "*", "(", ")"];
const symbolsInLetterRowKeys = ["[", "]", "{", "}", "|", "\\", "/", "<", ">"];

const lessonInfo = [
  {
    lessonNumber: 1,
    title: "Lesson1: Left Hand practice",
    image: "/images/1.png",
    keys: [spaceKey, ...leftHandPracticeKeys],
  },
  {
    lessonNumber: 2,
    title: "Lesson2: Right Hand Practice",
    image: "/images/2.png",
    keys: [spaceKey, ...rightHandPracticeKeys, colonKeys[0]],
  },
  {
    lessonNumber: 3,
    title: "Lesson3: Both Hand practice",
    image: "/images/3.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
    ],
  },
  {
    lessonNumber: 4,
    title: "Lesson4: G and H Keys practice",
    image: "/images/4.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
    ],
  },
  {
    lessonNumber: 5,
    title: "Lesson5: Apostrophe Key practice",
    image: "/images/5.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
    ],
  },
  {
    lessonNumber: 6,
    title: "Lesson6: Shift Keys practice",
    image: "/images/6.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...[...leftHandPracticeKeys, ...rightHandPracticeKeys, ...gAndHKeys].map(
        (val) => val.toUpperCase()
      ),
    ],
  },
  {
    lessonNumber: 7,
    title: "Lesson7: Left Hnad Top Row practice",
    image: "/images/7.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...leftHandTopRowKeys,
      ...[
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        ...gAndHKeys,
        ...leftHandTopRowKeys,
      ].map((val) => val.toUpperCase()),
    ],
  },
  {
    lessonNumber: 8,
    title: "Lesson8: Right Hand Top Row practice",
    image: "/images/8.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...leftHandTopRowKeys,
      ...rightHandTopRowKeys,
      ...[
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        ...gAndHKeys,
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
      ].map((val) => val.toUpperCase()),
    ],
  },
  {
    lessonNumber: 9,
    title: "Lesson9: Left Hand Bottom Row practice",
    image: "/images/9.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...leftHandTopRowKeys,
      ...rightHandTopRowKeys,
      ...leftHandBottomRowsKeys,
      ...[
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        ...gAndHKeys,
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...leftHandBottomRowsKeys,
      ].map((val) => val.toUpperCase()),
    ],
  },
  {
    lessonNumber: 10,
    title: "Lesson10: Right Hand Bottom Row practice",
    image: "/images/10.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...leftHandTopRowKeys,
      ...rightHandTopRowKeys,
      ...leftHandBottomRowsKeys,
      ...nandMKeys,
      ...commaKeys,
      ...[
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        ...gAndHKeys,
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...leftHandBottomRowsKeys,
        ...nandMKeys,
      ].map((val) => val.toUpperCase()),
    ],
  },
  {
    lessonNumber: 11,
    title: "Lesson11: Numbers practice",
    image: "/images/11.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...leftHandTopRowKeys,
      ...rightHandTopRowKeys,
      ...leftHandBottomRowsKeys,
      ...nandMKeys,
      ...commaKeys,
      ...[
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        ...gAndHKeys,
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...leftHandBottomRowsKeys,
        ...nandMKeys,
      ].map((val) => val.toUpperCase()),
      ...numberKeys,
    ],
  },
  {
    lessonNumber: 12,
    title: "Lesson12: Numbers Row Symbols practice",
    image: "/images/12.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...leftHandTopRowKeys,
      ...rightHandTopRowKeys,
      ...leftHandBottomRowsKeys,
      ...nandMKeys,
      ...commaKeys,
      ...[
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        ...gAndHKeys,
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...leftHandBottomRowsKeys,
        ...nandMKeys,
      ].map((val) => val.toUpperCase()),
      ...numberKeys,
      ...symbolInNumbersRowKeys,
      ...operatorKeys,
      ...underScoreAndEqualKeys,
    ],
  },
  {
    lessonNumber: 13,
    title: "Lesson13: Symbols In The Letter Row practice",
    image: "/images/12.png",
    keys: [
      spaceKey,
      ...leftHandPracticeKeys,
      ...rightHandPracticeKeys,
      colonKeys[0],
      ...gAndHKeys,
      apostropheKeys[0],
      ...leftHandTopRowKeys,
      ...rightHandTopRowKeys,
      ...leftHandBottomRowsKeys,
      ...nandMKeys,
      ...commaKeys,
      ...[
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        ...gAndHKeys,
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...leftHandBottomRowsKeys,
        ...nandMKeys,
      ].map((val) => val.toUpperCase()),
      ...numberKeys,
      ...symbolInNumbersRowKeys,
      ...operatorKeys,
      ...underScoreAndEqualKeys,
      ...symbolsInLetterRowKeys,
    ],
  },
];

export default lessonInfo;
