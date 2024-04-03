import FirstBlock from "../FirstMain/FirstBlock";

const SimilarAds = ({similarAds}: { similarAds: any }) => {
  return (
    <div className="similarAds">
      <h2>Похожие объявления</h2>
      <div className="similarAds__contaier">
        {similarAds.map((e: any) => {
          return <FirstBlock {...e} />;
        })}
      </div>
    </div>
  );
};

export default SimilarAds;
