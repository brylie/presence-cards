import "./IntroScreen.css";

interface IntroScreenProps {
  onContinue: () => void;
}

export function IntroScreen({ onContinue }: IntroScreenProps) {
  return (
    <div className="intro">
      <span className="intro__ring" aria-hidden="true" />
      <h1 id="screen-heading" tabIndex={-1}>Not a battle</h1>
      <p>
        Most card games ask you to fight something. This one
        doesn't work that way.
      </p>
      <p>
        Running from a feeling doesn't make it leave — it tends to come back,
        often at a worse time. Pushing against it usually makes it louder,
        not quieter. Both are ways of trying to make the feeling not be
        here, and neither works for long.
      </p>
      <p>
        What's left is simpler and harder: stay. Let the feeling be exactly
        as strong as it already is, without a story about whether it should
        be here. That's abiding — not liking it, not fixing it, just
        keeping it company until it moves through, which it will.
      </p>
      <p>Each card is something to hold onto while you do that — a companion, not a weapon.</p>
      <button className="intro__continue" onClick={onContinue}>
        Continue
      </button>
      <p className="intro__disclaimer">
        Support tool only — not a substitute for professional care.
      </p>
    </div>
  );
}
