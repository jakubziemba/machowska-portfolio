import styles from './Text.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span>Roksana Machowska</span>, was born in 1996 in Warsaw.
        She holds a Master of Fine Arts. She obtained eight
        scholarships for the best students for the artistic
        achievements: from the Rector of the Maria Grzegorzewska
        University in Warsaw (2016–2020), from the Capital City of
        Warsaw (2016–2019), and the Minister of Science and Higher
        Education (2020). She works in a variety of mediums:
        printmaking, digital graphics, painting, artistic fabric,
        design and installation. Her work for the bachelor’s thesis in
        Fine Arts was a series of graphics “Tamed element”. She took
        part in some group shows and held her solo exhibitions as
        well; including one at the Władysław Hasior Gallery in
        Zakopane (branch of the Tatra Museum), or at the Capital
        Centre for Cultural Education in Warsaw. In her works she is
        inspired by nature and abstraction forms.
      </p>
    </div>
  );
}
