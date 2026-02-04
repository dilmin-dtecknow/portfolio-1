import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import * as assets from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">

      <Tilt options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl">

        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

          {/* github Icon */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

            <div
              role="button"
              tabIndex={0}
              onClick={() => window.open(source_code_link, "_blank")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.open(source_code_link, "_blank") }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative group"
            >
              <img
                src={github}
                alt="github"
                className="w-6 h-6 object-contain transition-transform duration-200 transform group-hover:scale-125"
                aria-hidden="true"
              />

              <span className="absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded z-10">
                View code
              </span>
            </div>

          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 items-center">
          {tags?.map((tag) => {
            const name = tag.name.toLowerCase();
            const icon = assets[name] || assets[`${name}js`] ||
              (name === 'restapi' ? assets.web : null) ||
              (name === 'scss' ? assets.css : null) ||
              (name === 'nextjs' ? assets.reactjs : null) ||
              (name === 'supabase' ? assets.mongodb : null) ||
              (name === 'react' ? assets.reactjs : null);

            return icon ? (
              <div key={tag.name} className="relative group w-6 h-6">
                <img
                  src={icon}
                  alt={tag.name}
                  title={tag.name}
                  className="w-full h-full object-contain transition-transform duration-200 transform group-hover:scale-125"
                />

                <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                  {tag.name}
                </span>
              </div>
            ) : (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            )
          })}
        </div>
      </Tilt>

    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcase my skills and experience through real-world examples
          of my work. Each project is briefly described with links to code repositories and
          live demos in it. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")