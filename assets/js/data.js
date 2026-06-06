/* ============================================================================
   DavidGoodmanAuthor.com  —  EDIT YOUR WEBSITE CONTENT HERE
   ----------------------------------------------------------------------------
   This single file holds ALL the editable text, links, statuses, and image
   paths for the whole website. Edit the values inside the quotes " ".
   - To change text: edit the words between the quotes.
   - To add a purchase link: put your URL between the quotes (empty "" = hidden).
   - To change a status label: use one of the STATUS labels listed below.
   - To add an image: drop the file into  assets/images/  and put its file name
     here, e.g.  "author_photo": "assets/images/david.jpg"
   Save the file and refresh the page. No coding needed.
   ========================================================================== */

window.SITE = {
  /* Navigation (shown in the top menu). Usually no need to change. */
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Books", href: "books.html" },
    { label: "Works in Progress", href: "works-in-progress.html" },
    { label: "The Whisperer", href: "the-whisperer.html" },
    { label: "Media / Visual Inspiration", href: "media.html" },
    { label: "News / Updates", href: "news.html" },
    { label: "Contact", href: "contact.html" }
  ],

  /* ---------------------------------------------------------------- HOME */
  home: {
    hero_title: "David Goodman",
    hero_subtitle: "Author",
    hero_tagline: "Stories about courage, loneliness, resilience, survival, and the quiet strength it takes to keep going when others underestimate you.",
    author_photo: "", // e.g. "assets/images/david.jpg"
    welcome_heading: "Welcome",
    welcome_text: "I'm David Goodman \u2014 a writer drawn to characters who endure. By day I've spent more than two decades in law enforcement; by night I write about people fighting to hold on to hope when the world asks them to give up. From post-apocalyptic survival to a gentle children's tale about being different, my stories share one belief: the things that make us feel small can become the very strength that carries us through."
  },

  /* --------------------------------------------------------------- ABOUT */
  about: {
    portrait: "", // e.g. "assets/images/david-portrait.jpg"
    bio: "David Goodman is the author of Echoes of Life: The End of Humanity. He has spent more than two decades in law enforcement and currently serves as a sergeant in Alabama. His writing is shaped by themes of courage, loneliness, resilience, survival, and the quiet strength it takes to keep going when others underestimate you.",
    personal_note: "",      // optional — add a longer personal note later
    writing_journey: "",    // optional
    self_publishing: "",    // optional
    future_goals: ""        // optional
  },

  /* --------------------------------------------------------------- BOOKS
     Add a new book by copying one { ... } block and pasting it inside [ ].
     STATUS options: Published, Available Now, In Progress, Querying Agents,
     Drafting, Revising, Coming Soon, On Hold                                 */
  books: [
    {
      title: "Echoes of Life: The End of Humanity",
      status: "Available Now",
      genre: "Post-apocalyptic survival fiction",
      cover: "", // e.g. "assets/images/echoes-cover.jpg"
      short_description: "Echoes of Life: The End of Humanity is a post-apocalyptic survival story about loneliness, danger, hope, and the fight to keep going when the world has fallen apart.",
      long_description: "",
      back_cover_description: "",
      purchase_links: [
        { label: "Amazon Paperback", url: "" },
        { label: "Amazon Hardcover", url: "" },
        { label: "Kindle", url: "" }
      ],
      audiobook_link: "",   // put the audiobook URL here when ready
      trailer_link: "",     // put a trailer/video URL here when ready
      audiobook_update: "Audiobook is in progress \u2014 updates coming soon.",
      excerpt: "",          // paste a sample excerpt here
      gallery: []           // e.g. ["assets/images/echoes1.jpg", "assets/images/echoes2.jpg"]
    }
  ],

  /* ------------------------------------------------------------ PROJECTS
     Used by "Works in Progress" and "The Whisperer" pages.
     show_in_wip: true  => appears on the Works in Progress page
     show_in_wip: false => has its own page (The Whisperer)                   */
  projects: [
    {
      slug: "the-whisperer",
      title: "The Whisperer and the Great Moon Flower",
      status: "Querying Agents",
      genre: "Children's picture book",
      cover: "",
      short_description: "A heartfelt picture book about Dan, a young Whisperer who is mocked for his giant ears \u2014 until a devastating flood threatens his forest community.",
      long_description: "The Whisperer and the Great Moon Flower is a heartfelt picture book about Dan, a young Whisperer who is mocked for his giant ears. When a devastating flood threatens his forest community, Dan must learn to believe in himself and use the very thing everyone laughed at to save them.",
      themes: ["Bullying", "Self-doubt", "Being different", "Kindness", "Courage", "Self-acceptance", "Emotional resilience", "Discovering that what others see as a flaw may be what makes someone special"],
      progress_notes: "Currently being queried to literary agents and seeking traditional publishing.",
      excerpt: "",
      disclaimer: "Visual artwork shown here is inspiration only. Final illustration direction may be guided by a future publisher.",
      character_images: [], // e.g. ["assets/images/dan.jpg"]
      inspiration_images: [], // e.g. ["assets/images/forest.jpg"]
      purchase_links: [],
      show_in_wip: false
    },
    {
      slug: "vampire-novel",
      title: "Vampire Novel",
      status: "In Progress",
      genre: "Dark fantasy / vampire fiction",
      cover: "",
      short_description: "A dark fantasy vampire story involving ancient power, blood abilities, moral conflict, and a young woman named Aria who must discover what she is capable of becoming.",
      long_description: "A dark fantasy vampire story involving ancient power, blood abilities, moral conflict, and a young woman named Aria who must discover what she is capable of becoming.",
      themes: ["Ancient power", "Blood abilities", "Moral conflict", "Self-discovery"],
      progress_notes: "In active development. Working title and further details to come.",
      excerpt: "",
      disclaimer: "",
      character_images: [],
      inspiration_images: [],
      purchase_links: [],
      show_in_wip: true
    },
    {
      slug: "future-projects",
      title: "Future Projects",
      status: "Coming Soon",
      genre: "",
      cover: "",
      short_description: "A place for future stories, novels, picture books, and creative projects.",
      long_description: "A place for future stories, novels, picture books, and creative projects.",
      themes: [],
      progress_notes: "",
      excerpt: "",
      disclaimer: "",
      character_images: [],
      inspiration_images: [],
      purchase_links: [],
      show_in_wip: true
    }
  ],

  /* ----------------------------------------------- MEDIA / VISUAL INSPIRATION
     Put image file names inside each section's [ ] list.                     */
  media: {
    note: "Images shown may include concept art, visual inspiration, or promotional material connected to David Goodman's writing projects.",
    sections: [
      { name: "Echoes of Life", images: [] },
      { name: "The Whisperer and the Great Moon Flower", images: [] },
      { name: "Vampire Novel", images: [] },
      { name: "Future Projects", images: [] }
    ]
  },

  /* --------------------------------------------------------------- NEWS
     Add an update by copying a { ... } block to the top of the list.
     CATEGORY options: Book Updates, Query Updates, Audiobook Updates,
     Publishing News, Behind the Story, Writing Progress, Events / Announcements */
  news: [
    {
      title: "Echoes of Life audiobook is in progress",
      category: "Audiobook Updates",
      date: "2025",
      body: "The audiobook edition of Echoes of Life: The End of Humanity is currently in progress. More details to come soon."
    },
    {
      title: "The Whisperer and the Great Moon Flower is being queried to literary agents",
      category: "Query Updates",
      date: "2025",
      body: "The Whisperer and the Great Moon Flower is currently being queried to literary agents as I seek traditional publishing for the picture book."
    }
  ],

  /* ------------------------------------------------------------- CONTACT */
  contact: {
    intro: "For publishing, media, book-related inquiries, or reader messages, contact:",
    email: "davidgoodmanauthor@gmail.com",
    amazon_author_url: "", // optional Amazon author page link
    social_links: []       // e.g. [{ label: "TikTok", url: "https://..." }]
  },

  /* -------------------------------------------------------------- FOOTER */
  footer: {
    name: "David Goodman Author",
    domain: "DavidGoodmanAuthor.com",
    email: "davidgoodmanauthor@gmail.com"
  }
};
