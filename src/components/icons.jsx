// import styled from "styled-components";

// export const Icon = styled(({ name, ...props }) => {
//     const icon = require(`./icons/${name}.svg?.sprite`)
//     console.log(icon)
  
//     return (
//       <svg viewBox={icon.viewBox} width={24} height={24} {...props}>
//         <use xlinkHref={`${icon.id}`} />
//       </svg>
//     )
//   })``




//   const MaterialsIcon = styled(Icon).attrs({ name: "chat-files" })`
//   fill: ${props => props.theme.colors.primary};
//   margin-right: 10px;
// `

// export const LeftIcon = styled(Icon).attrs({ name: "arrow" })`
//   width: 14px;
//   height: 14px;
//   fill: #424242;
//   cursor: pointer;
//   opacity: ${props => (props.disabled ? 0.5 : 1)};
//   pointer-events: ${props => (props.disabled ? "none" : "auto")};
//   margin: 0 12px 0 0;
//   transform: rotate(90deg);
//   ${MediaRange.lessThan("mobile")`
//     margin-right: auto;
//   `}
// `


// <LeftIcon disabled={props.lessThanTheCurrentMonth} onClick={props.prevMonth} />