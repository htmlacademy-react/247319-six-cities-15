type HostProps = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  description: string;
}

export default function Host({name, avatarUrl, isPro, description}: HostProps): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${isPro ? 'offer__avatar-wrapper--pro' : null} user__avatar-wrapper`}>
          <img
            className="offer__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt={`${name} avatar`}
          />
        </div>
        <span className="offer__user-name">{name}</span>
        {isPro ? <span className="offer__user-status">Pro</span> : null}
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {description}
        </p>
        <p className="offer__text">
          {description}
        </p>
      </div>
    </div>
  );
}
