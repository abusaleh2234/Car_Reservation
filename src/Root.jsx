import Container from "./Component/Container";
import Reservation from "./Component/Reservation";

const Root = () => {
    return (
        <div>
            <Container>
                <Reservation></Reservation>
            </Container>
        </div>
    );
};

export default Root;