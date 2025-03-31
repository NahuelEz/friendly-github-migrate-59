
import React from "react";

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

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="bg-[rgba(255,255,255,0.2)] flex grow items-stretch gap-[3px] text-l font-bold leading-none w-full flex-wrap py-[5px] rounded-[108px] px-[19px]">
        <input 
          type="text" 
          placeholder="Introduce tu usuario de Instagram" 
          className="text-[#B762F7] grow shrink basis-auto bg-transparent outline-none border-none" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
        <button 
          type="submit" 
          className="text-white grow shrink w-[225px] cursor-pointer"
        >
          | Consultar mi crecimiento
        </button>
      </div>
    </form>
  );
};

export default InstagramSearchBar;
