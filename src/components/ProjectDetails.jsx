import { motion } from "motion/react";
import { useState } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href, // video link
  closeModal,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-auto backdrop-blur-sm p-4">
  <motion.div
    className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl bg-gradient-to-l from-midnight to-navy border border-white/10 shadow-sm rounded-2xl overflow-hidden"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    <button
      onClick={closeModal}
      className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
    >
      <img src="assets/close.svg" className="w-6 h-6" />
    </button>

    <div className="w-full max-h-[90vh] overflow-auto">
      {showVideo ? (
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video">
            <iframe
              src={href}
              title={title}
              className="w-full h-full rounded-t-2xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setShowVideo(false)}
              className="px-4 py-2 text-white rounded-lg bg-gray-700 hover:bg-gray-600"
            >
              ← Back
            </button>
          </div>
        </div>
      ) : (
        <>
          <img src={image} alt={title} className="w-full h-auto rounded-t-2xl" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p key={index} className="mb-3 font-normal text-neutral-400">
                {subDesc}
              </p>
            ))}
            <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
              <div className="flex gap-3 flex-wrap">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ))}
              </div>
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white"
              >
                View Project
                <img src="assets/arrow-up.svg" className="size-4" alt="Arrow" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  </motion.div>
</div>

  );
};

export default ProjectDetails;