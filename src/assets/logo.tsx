interface IconInterface {
  title: string;
  color: string;
  size: number;
}

export const LogoSVG = (props: IconInterface) => {
  const { title, color, size } = props;
  return (
    <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>Layer 1</title>

        <g id="svg_9">
          <rect
            id="svg_1"
            height="36.7347"
            width="36.7347"
            y="1.21532"
            x="2.44899"
            stroke={color}
            style={{ fill: "transparent" }}
          />
          <text
            transform="matrix(1.47365, 0, 0, 1.47365, -4.61525, -2.92513)"
            text-anchor="start"
            font-family="Noto Sans JP"
            font-size="24"
            id="svg_4"
            y="24.47044"
            x="9.94031"
            stroke-width="0"
            fill={color}
          >
            L
          </text>
        </g>
        <text
          transform="matrix(1.9322, 0, 0, 1.40917, -42.4756, -0.749253)"
          text-anchor="start"
          font-family="Noto Sans JP"
          font-size="24"
          stroke-width="0"
          id="svg_3"
          y="25"
          x="45"
          stroke="#000"
          fill={color}
        >
          OGO
        </text>
      </g>
    </svg>
  );
};
