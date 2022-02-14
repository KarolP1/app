interface IconInterface {
  title: string;
  color: string;
  size: number;
}

export const LogoSVG = (props: IconInterface) => {
  const { title, color, size } = props;
  return (
    <svg
      width={size * 65}
      height={(size * 65) / 3}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <title>{title}</title>

        <g id="svg_9">
          <rect
            id="svg_1"
            height="36.7347"
            width="36.7347"
            y="1.21532"
            x="2.44899"
            stroke={color}
            style={{ fill: "transparent", transform: `scale(${size / 2})` }}
          />
          <text
            transform="matrix(1.47365, 0, 0, 1.47365, -4.61525, -2.92513)"
            textAnchor="start"
            fontFamily="Noto Sans JP"
            fontSize="24"
            id="svg_4"
            y="24.47044"
            x="9.94031"
            strokeWidth="0"
            fill={color}
            style={{ transform: `scale(${size / 1.5})` }}
          >
            L
          </text>
        </g>
        <text
          transform="matrix(0.9322, 0, 0, 0.40917, 0.4756, 0.749253)"
          textAnchor="start"
          fontFamily="Noto Sans JP"
          fontSize="24"
          strokeWidth="0"
          id="svg_3"
          y="25"
          x="31"
          stroke="#000"
          fill={color}
          style={{ transform: `scale(${size / 1.5})` }}
        >
          OGO
        </text>
      </g>
    </svg>
  );
};
