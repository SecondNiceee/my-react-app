import FirstBlock from "./FirstBlock";

const FirstMain = ({ ordersInformation, setDetailsActive }: { ordersInformation: any, setDetailsActive: any }) => {
  return (
    <div className="FirstMain">

      {ordersInformation.legth === 0 ? (
        <h1 className="EmptyText"> Нет таких предложений </h1>
      ) : (
        ordersInformation.map((e: any) => {
          return <FirstBlock setDetailsActive={setDetailsActive}   {...e} isButton = {true} />;
        })
      )}

    </div>
  );
};

export default FirstMain;
