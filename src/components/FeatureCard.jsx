/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function FeatureCard({ index, feature }) {
  const shippingIcon = (
    <svg viewBox="0 0 32 32" width="32" fill="none">
      <path
        d="M20.249 15.55v-4.575L8.386 4.125"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M2.962 8.3 14 14.687l10.962-6.35M14 26.013V14.675"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M11.412 2.1 4.737 5.813c-1.512.837-2.75 2.937-2.75 4.662v7.063c0 1.724 1.238 3.825 2.75 4.662l6.675 3.713c1.425.787 3.763.787 5.188 0l6.675-3.713c1.512-.837 2.75-2.938 2.75-4.662v-7.063c0-1.725-1.238-3.825-2.75-4.662L16.6 2.1c-1.438-.8-3.763-.8-5.188 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  const returnsIcon = (
    <svg viewBox="0 0 32 32" fill="none" width="32">
      <path
        d="m10.5 15 3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.4 3c.9-.7 2.3-.7 3.2 0l2 1.8q.6.5 1.5.6h2.2c1.3 0 2.4 1 2.4 2.4v2q0 1 .6 1.7l1.7 2c.7.8.7 2.2 0 3l-1.7 2q-.6.7-.6 1.6v2.2c0 1.3-1.1 2.4-2.4 2.4H20c-.4 0-1.2.2-1.5.6l-2 1.7c-.9.7-2.3.7-3.2 0l-2-1.7q-.6-.6-1.5-.6H7.7a2.4 2.4 0 0 1-2.4-2.4V20q0-.9-.6-1.5l-1.6-2c-.8-.9-.8-2.3 0-3.2l1.6-2q.6-.6.6-1.5v-2c0-1.4 1.1-2.5 2.4-2.5H10q.9 0 1.6-.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  const supportIcon = (
    <svg viewBox="0 0 32 32" width="32" fill="none">
      <path
        d="M22.475 13.488v5c0 .325-.013.637-.05.937-.288 3.375-2.275 5.05-5.938 5.05h-.5c-.312 0-.612.15-.8.4l-1.5 2c-.662.887-1.737.887-2.4 0l-1.5-2c-.162-.212-.525-.4-.8-.4h-.5c-3.987 0-5.987-.988-5.987-5.988v-5c0-3.662 1.688-5.65 5.05-5.937.3-.037.613-.05.938-.05h8c3.987 0 5.987 2 5.987 5.988Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M27.475 8.488v5c0 3.675-1.688 5.65-5.05 5.937.037-.3.05-.613.05-.938v-5c0-3.987-2-5.987-5.988-5.987h-8c-.325 0-.637.013-.937.05.287-3.362 2.275-5.05 5.937-5.05h8c3.988 0 5.988 2 5.988 5.988Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.87 16.563h.01M12.494 16.563h.012M8.12 16.563h.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  const icon =
    feature.icon === "shipping"
      ? shippingIcon
      : feature.icon === "returns"
      ? returnsIcon
      : feature.icon === "support"
      ? supportIcon
      : "";

  return (
    <motion.div
      className="flex flex-col items-center gap-3 text-black"
      variants={fadeInAnimation("up", index * 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="">{icon}</div>
      <h3 className="font-semibold text-secondary-dark">{feature.title}</h3>
      <p className="w-[84%] text-[15px] text-center text-content-medium-dark">
        {feature.text}
      </p>
    </motion.div>
  );
}
export default FeatureCard;
