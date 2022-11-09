import React from "react";
import Notice from "./Notice";
import People from "./People";

const Sidebar = () => {
  const authors = [
    {
      id: 1,
      name: "Chintab bhatt",
      title: "The founder & chief designer ot YourUXTEAM",
      profile:
        "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
    },
    {
      id: 2,
      name: "Yael Levey",
      title: "Creative director for BBC Weather",
      profile:
        "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B",
    },
    {
      id: 3,
      name: "Irene au",
      title: "The former head of UX and Design at Google",
      profile:
        "https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg",
    },
  ];
  return (
    <div>
      {/* Notice */}
      <Notice />
      <div className="mt-12">
        <h1 className="text-gray-dark font-bold">
          People you might be interested
        </h1>
        {authors.map((author) => (
          <div key={author.id}>
            <People name={author.name} title={author.title} profile={author.profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
