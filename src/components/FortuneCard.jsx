export default function FortuneCard() {

    return (
        /* การ์ดเซียมซี */
        <div>
            <h2>ใบที่ {currentFortune.id} : {currentFortune.title}</h2>
            <p>{currentFortune.text}</p>
        </div>
    );
}