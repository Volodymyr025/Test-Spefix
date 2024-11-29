type BtnType = "submit" | "reset" | "button";

interface BtnProps {
  title: string;
  type: BtnType;
}
export const Button = ({ title, type }: BtnProps) => {
  return (
    <button
      type={type}
      className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
    >
      {title}
    </button>
  );
};
