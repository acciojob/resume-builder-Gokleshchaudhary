import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFromStorage, resetAll } from '../slices/resumeSlice';

export default function PreviewPage() {
  const resume = useSelector(s => s.resume);
  const dispatch = useDispatch();

  const handleLoad = () => dispatch(loadFromStorage());
  const handleReset = () => dispatch(resetAll());

  return (
    <section>
      <h2>Preview / Final Resume</h2>
      <button onClick={handleLoad}>Load from saved</button>
      <button onClick={handleReset}>Reset</button>

      <div className="resume-output">
        <h3>{resume.profile.fname} {resume.profile.lname}</h3>
        <p>{resume.profile.phone} · {resume.profile.address}</p>
        {resume.profile.url && <img src={resume.profile.url} alt="profile" style={{maxWidth:120}}/>}

        <h4>Education</h4>
        <ul>
          {resume.education.map(e => (
            <li key={e.id}>{e.courseName} — {e.college} ({e.completionYear}) — {e.percentage}</li>
          ))}
        </ul>

        <h4>Skills</h4>
        <ul>
          {resume.skills.map(s => <li key={s.id}>{s.skill}</li>)}
        </ul>

        <h4>Projects</h4>
        <ul>
          {resume.projects.map(p => (
            <li key={p.id}><strong>{p.projectName}</strong> — {p.techStack} — {p.description}</li>
          ))}
        </ul>

        <h4>Social</h4>
        <ul>
          {resume.social.map(s => <li key={s.id}><a href={s.Social} target="_blank" rel="noreferrer">{s.Social}</a></li>)}
        </ul>
      </div>
    </section>
  );
}
