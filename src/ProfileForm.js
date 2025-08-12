import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocial, updateSocial, deleteSocial } from '../slices/resumeSlice';

export default function SocialPage() {
  const social = useSelector(s => s.resume.social);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Social Media</h2>
      <button id="add_social" onClick={() => dispatch(addSocial())}>Add Social</button>
      <ul>
        {social.map(s => (
          <li key={s.id}>
            <input name="Social" type="text" placeholder="https://..." value={s.Social} onChange={e => dispatch(updateSocial({ id: s.id, Social: e.target.value }))} />
            <button id="delete" onClick={() => dispatch(deleteSocial(s.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
