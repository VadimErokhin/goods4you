interface Image {
  src: string;
  name: string;
  position: string;
}

export const images: Array<Image[]> = [
  [
    {
      src: "../../../../public/person1.png",
      name: "Maxim",
      position: "Administrator",
    },
    {
      src: "../../../../public/person2.png",
      name: "Vlad",
      position: "Developer",
    },
  ],
  [
    {
      src: "../../../../public/person3.png",
      name: "Yulia",
      position: "HR",
    },
    {
      src: "../../../../public/person4.png",
      name: "Dima",
      position: "Manager",
    },
  ],
  [
    {
      src: "../../../../public/person5.png",
      name: "Vika",
      position: "Designer",
    },
    {
      src: "../../../../public/person6.png",
      name: "Lena",
      position: "Developer",
    },
  ],
];
