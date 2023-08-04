import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Article", sectionId: "Article-section" },
];

const Navbar = () => {
  return (
    <div className='flex flex-col gap-3 font-semibold'>
      {navs.map((navItem) => (
        <a href={`#${navItem.sectionId}`} key={navItem.title}>
          <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
          {navItem.title}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
