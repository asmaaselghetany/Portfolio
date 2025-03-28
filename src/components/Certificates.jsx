import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({
  index,
  title,
  issuer,
  date,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[24px]'>{title}</h3>
      <p className='text-secondary text-[14px] mt-2'>{issuer}</p>
      <p className='text-secondary text-[12px] mt-1'>{date}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='text-white font-medium text-[16px] hover:text-[#915EFF] transition-colors'
          >
            View Certificate
          </a>
        </div>

        <img
          src={image}
          alt={`certificate-${title}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.title} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, ""); 