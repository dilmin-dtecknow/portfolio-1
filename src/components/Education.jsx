import { motion } from 'framer-motion'

import { styles } from '../styles'
import { logo, logo1 } from '../assets'
import { education } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>EDUCATION</p>
        <h2 className={styles.sectionHeadText}>My Education</h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <motion.div key={edu.institution}
            variants={fadeIn('up', 'spring', index * 0.2, 0.6)}
            whileHover={{ scale: 1.02 }}
            className="bg-tertiary p-6 rounded-2xl flex gap-4 items-start"
          >
            {edu.logo && (
              <motion.img src={edu.logo} alt={edu.institution} className="w-14 h-14 rounded-md object-contain" animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            )}

            <div>
              <h3 className="text-white font-bold text-[18px]">{edu.degree}</h3>
              <p className="text-secondary text-[14px] mt-1">{edu.institution} {edu.year ? `• ${edu.year}` : ""}</p>

              {edu.details && (
                <ul className="mt-4 space-y-2 text-white text-[14px]">
                  {edu.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      <span className="ml-2">{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Education, "education")
