import type { SVGProps } from 'react';

export function Rating18Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
        <path d="M10 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0" />
        <path d="M10 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M7 15V9m8.5 3h3M17 10.5v3" />
      </g>
    </svg>
  );
}

export function WeightSharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 21V3h18v18H3Zm9-9q1.25 0 2.125-.875T15 9q0-1.25-.875-2.125T12 6q-1.25 0-2.125.875T9 9q0 1.25.875 2.125T12 12Zm-2-2.5v-1h1v1h-1Zm1.5 0v-1h1v1h-1Zm1.5 0v-1h1v1h-1Z"
      />
    </svg>
  );
}

export function HealthAndSafety(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M10.5 15.5h3V13H16v-3h-2.5V7.5h-3V10H8v3h2.5v2.5ZM12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Z"
      />
    </svg>
  );
}

export function GooglerTravel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17.5 5.5q-.825 0-1.413-.588Q15.5 4.325 15.5 3.5t.587-1.413Q16.675 1.5 17.5 1.5q.825 0 1.413.587q.587.588.587 1.413q0 .825-.587 1.412q-.588.588-1.413.588ZM11 23l2.8-14.1l-1.8.7V13h-.7l-6.75 7.925q-.025-.025-.287-.225q-.263-.2-.763-.2q-.25 0-.662.15q-.413.15-.688.7l-1.1-.95q-.15-.125-.238-.3q-.087-.175-.112-.375q-.025-.2.038-.388Q.8 19.15.925 19l3.25-3.8q.125-.175.3-.25q.175-.075.375-.1q.2-.025.388.05q.187.075.337.2L7.1 16.4L10 13V8.3l5.05-2.15q.725-.325 1.475-.075q.75.25 1.175.925l1 1.6q.6 1.05 1.738 1.725Q21.575 11 23 11v2q-1.65 0-3.087-.688q-1.438-.687-2.413-1.812l-.6 3l2.1 2V23h-2v-6l-2.1-2l-1.8 8Zm-8.5-1q0-.425.288-.712Q3.075 21 3.5 21t.713.288q.287.287.287.712t-.287.712Q3.925 23 3.5 23t-.712-.288Q2.5 22.425 2.5 22Z"
      />
    </svg>
  );
}

export function Medication(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 5q-.425 0-.713-.288T3 4q0-.425.288-.713T4 3h10q.425 0 .713.288T15 4q0 .425-.288.713T14 5H4Zm5 12.5q.625 0 1.063-.438T10.5 16v-1h1q.625 0 1.063-.438T13 13.5q0-.625-.438-1.063T11.5 12h-1v-1q0-.625-.438-1.063T9 9.5q-.625 0-1.063.438T7.5 11v1h-1q-.625 0-1.063.438T5 13.5q0 .625.438 1.063T6.5 15h1v1q0 .625.438 1.063T9 17.5ZM4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h10q.825 0 1.413.588T16 8v11q0 .825-.588 1.413T14 21H4Zm16 0q-.425 0-.713-.288T19 20v-6.25q-.875-.425-1.438-1.413T17 10q0-1.7.863-2.85T20 6q1.275 0 2.138 1.15T23 10q0 1.35-.563 2.337T21 13.75V20q0 .425-.288.713T20 21Z"
      />
    </svg>
  );
}

export function FaceMask(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M224 72h-.85a16 16 0 0 0-9.68-10l-80-29a16.06 16.06 0 0 0-10.94 0l-80 29.09a16 16 0 0 0-9.68 10H32A32 32 0 0 0 0 104v24a32 32 0 0 0 32 32h5.13c6.54 14.44 19.26 27.12 37.7 37.36c21 11.68 43.52 17 49.92 18.3a15.7 15.7 0 0 0 6.5 0c6.4-1.34 28.9-6.62 49.92-18.3c18.44-10.24 31.16-22.92 37.7-37.36H224a32 32 0 0 0 32-32v-24a32 32 0 0 0-32-32ZM32 144a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v48.15a59.94 59.94 0 0 0 .53 7.85Zm136 0H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Zm0-32H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Zm72 16a16 16 0 0 1-16 16h-.53a59.94 59.94 0 0 0 .53-7.85V88a16 16 0 0 1 16 16Z"
      />
    </svg>
  );
}

export function DonateBlood(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M17.726 13.02L14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zM15.403 12a3 3 0 0 0 3-3c0-2.708-3-6-3-6s-3 3.271-3 6a3 3 0 0 0 3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PregnantWoman(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M9 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2zm7 9a3.285 3.285 0 0 0-2-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"
      />
    </svg>
  );
}

export function FlashOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7V2m2 2v8h3v2.66L14 11h-3.76l3.52-7H9Z" />
    </svg>
  );
}

export function Coronavirus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.5 10.5v.75h-1.54a6.978 6.978 0 0 0-1.52-3.65l1.09-1.09l.01.01l.53.53l1.06-1.06l-2.12-2.12l-1.06 1.06l.52.52l-1.09 1.09a7.015 7.015 0 0 0-3.64-1.51V3.5h.76V2h-3v1.5h.74v1.54c-1.37.15-2.62.7-3.64 1.52L6.51 5.47l.01-.01l.53-.53l-1.06-1.06l-2.12 2.12l1.06 1.06l.52-.52l1.09 1.09a6.89 6.89 0 0 0-1.5 3.63H3.5v-.75H2v3h1.5v-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09l-.52-.52l-1.06 1.06l2.12 2.12l1.06-1.06l-.53-.53l-.01-.01l1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.54h-.73V22h3v-1.5h-.76v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09l-.52.52l1.06 1.06L20.13 18l-1.06-1.06l-.53.53l-.01.01l-1.09-1.09a7.025 7.025 0 0 0 1.52-3.65h1.54v.75H22v-3h-1.5zM13.75 8c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-3.5 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM8.5 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1.75 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM12 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1.75 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1.75-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"
      />
    </svg>
  );
}
