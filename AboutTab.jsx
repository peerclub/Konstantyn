import profileData from '../data/Profile.json';

const About = 
    <div className="tab-content">
        {profileData.user.map(({name, age, languages, firstDev, occupation, sympathy, note}, index) => (
            <div className="about-in" key={index}>
                <div className="about-item">Имя: {name}</div>
                <div className="about-item">Возраст: {age}</div>
                <div className="about-item">Язык: {languages.join(', ')}</div>
                <div className="about-item">Первая разработка: {firstDev} 🛠️</div>
                <div className="about-item">Деятельность: {occupation}</div>
                <div className="about-item">Симпатия: {sympathy}</div>
                <div className="about-item">Заметка:<span className="about-item-note">{note}</span></div>
            </div>
        ))}
    </div>

export default About;