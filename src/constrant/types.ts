export const TYPES = {
  Controllers: {
    BoardController: Symbol("BoardController"),
  },
  Repositories: {
    Domain: {
      Board: Symbol("BoardRepository"),
    },
  },
  Services: {
    Application: {
      Board: Symbol("BoardService"),
    },
  },
  //   Infrastructure: {
  //     DataInitializer: Symbol("DataInitializerService"),
  //   },
  // },
};

export default TYPES;
