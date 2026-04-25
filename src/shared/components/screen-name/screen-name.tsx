type ScreenNameProps = {
  name?: string;
};

const badgeStyle: React.CSSProperties = {
  borderRadius: 10,
  fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
  fontFamily: "var(--font-body)",
};

const ScreenName = ({ name = "" }: ScreenNameProps) => {
  return (
    <div className="mb-4">
      <span
        className="border border-secondary text-secondary px-2 py-2 small d-inline-block mb-3"
        style={badgeStyle}
      >
        {name}
      </span>
    </div>
  );
};

export default ScreenName;
