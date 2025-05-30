import React from "react";
import { Link } from "react-router-dom";
interface InstagramSearchBarProps {
  onSearch?: (username: string) => void;
  className?: string;
}
export const InstagramSearchBar: React.FC<InstagramSearchBarProps> = ({
  onSearch,
  className = ""
}) => {
  const [username, setUsername] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && username) {
      onSearch(username);
    }
  };
  return <form onSubmit={handleSubmit} className={className}>
      <div className="flex grow items-stretch gap-[3px] text-l font-bold leading-none w-full flex-wrap rounded-[108px] px-[20px] py-[15px] bg-white/[0.33]">
        <input type="text" placeholder="Introduce tu usuario de Instagram" className="text-[#B762F7] grow shrink basis-auto bg-transparent outline-none border-none" value={username} onChange={e => setUsername(e.target.value)} />
        <div className="flex items-center">
          <span className="text-white mx-2">|</span>
          <Link to="/consultar-mi-crecimiento" className="text-white grow shrink w-[225px] cursor-pointer">
            Consultar mi crecimiento
          </Link>
        </div>
      </div>
    </form>;
};
export default InstagramSearchBar;