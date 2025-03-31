import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, isOpen, onClick }) => {
  return (
    <div
      className="border-b border-[#B762F7] py-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[#B762F7] text-[32px] font-normal">{question}</h3>
        <img
          src={
            isOpen
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/94667dd207e975b79e69894527255f4555f7fac1299d097c8dadd64db7dcbfae?placeholderIfAbsent=true"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/c6982b22134f99db41ae48c41fa8b7ca22fb1f2abc884016844d5a4eae03e8eb?placeholderIfAbsent=true"
          }
          alt={isOpen ? "Collapse" : "Expand"}
          className="aspect-[1] object-contain w-[30px]"
        />
      </div>
      {isOpen && (
        <div className="text-[#4F1092] text-[20px] mt-4 pr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
          nisl sit amet nisl.
        </div>
      )}
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "¿Perderé mis seguidores si cancelo el servicio?",
    "¿Cuánto tardaré en ver resultados?",
    "¿Son reales los seguidores?",
    "¿Quién usa esto?",
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex w-[1186px] max-w-full flex-col items-stretch ml-[91px] mt-[131px] max-md:mt-10">
      <h2 className="text-[#4F1092] text-6xl font-normal leading-[0.9] uppercase max-md:max-w-full max-md:text-[40px]">
        Preguntas frecuentes
      </h2>
      <div className="text-[rgba(79,16,146,1)] text-[32px] font-bold leading-9 mt-[42px] max-md:max-w-full max-md:mr-[7px] max-md:mt-10">
        ¿Aún tienes preguntas? <br />
        <span style={{ fontWeight: 400 }}>
          ¡No dudes en mandarnos un correo electrónico o iniciar un chat en
          directo con nosotros!
        </span>
      </div>
      <div className="border bg-[#B762F7] w-full shrink-0 h-px mt-[82px] border-[rgba(183,98,247,1)] border-solid max-md:mt-10" />

      <div className="mt-8">
        {faqs.map((question, index) => (
          <FAQItem
            key={index}
            question={question}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
