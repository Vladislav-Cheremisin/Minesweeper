type SettingsMenuItemProps = {
  text: string;
  isVisible?: boolean;
  action: () => void;
};

export const SettingsMenuItem = ({
  text,
  action,
  isVisible = true,
}: SettingsMenuItemProps) => {
  return (
    <>
      {isVisible && (
        <button
          className="text-zinc-300 w-full h-fit hover:cursor-pointer hover:bg-zinc-300/10 p-2"
          onClick={action}
        >
          {text}
        </button>
      )}
    </>
  );
};
