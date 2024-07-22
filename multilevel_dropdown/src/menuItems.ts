export const menuItems = [
  {
    id: 1,
    name: "Home",
    items: [
      {
        id: 2,
        name: "Tech",
        items: [
          {
            id: 3,
            name: "Frontend",
            items: [
              {
                id: 4,
                name: "React",
                items: [{ id: 5, name: "Nextjs", items: [] }],
              },
            ],
          },
        ],
      },
      { id: 6, name: "Backend", items: [
        {id: 7, name: 'NodeJs', items: [
                {id: 8,  name: 'ExpressJs', items: []}
        ]}
      ] },
    ],
  },
  { id: 9, name: "Contact", items: [] },
  { id: 10, name: "About us", items: [] },
];
