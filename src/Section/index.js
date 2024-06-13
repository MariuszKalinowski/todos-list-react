import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section section--last">
        <div className="section__element section__element--withButtons">
            {title}
            {extraHeaderContent}
        </div>
        <div>
            {body}
        </div>
    </section>
);

export default Section;