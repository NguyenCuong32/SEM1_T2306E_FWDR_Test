import './home.css';
function Home() {
const picture ="https://bloganchoi.com/wp-content/uploads/2019/12/thanh-cong-apple5.jpg"
return(
    <section>
        <div>
            <div class="h1">
                <div>
                    <img classname="profile" src={picture}></img>
                </div>
            </div>
            <div>
                <h2><b>ABC limited liability company</b></h2>
                <h3>Specializing in providing information technology solutions in the fields of AI, Finance...</h3>
            </div>
        </div>
    </section>
);
}
export default Home