import HistoryItem from "./historyItem";

function History({ history }) {
    return (
        <div className="listaHistorico">
            <h2>Histórico de Resultados:</h2>
            <ul>
                {history.map((res, index) => (
                    <HistoryItem key={index} value={res} />
                ))}
            </ul>
        </div>
    );
}

export default History;
