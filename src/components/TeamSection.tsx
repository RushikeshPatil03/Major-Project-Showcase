import React from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  Mail, 
  GraduationCap, 
  Users
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-28 relative bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Engineering & Research Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet the Builders of SmartAttend
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Final Year B.E. Computer Science & Engineering (Data Science) candidates at Ballari Institute of Technology & Management.
          </p>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectConfig.team.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border-slate-700/60 flex flex-col justify-between"
            >
              <div>
                {/* Photo or Initials Avatar */}
                <div className="relative mb-5 flex justify-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 shadow-xl shadow-cyan-500/10">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          // Graceful fallback to initial avatar if image fails
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-navy-950 flex flex-col items-center justify-center text-cyan-400 border border-slate-700/80">
                        <span className="text-2xl font-bold font-mono tracking-wider">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 mt-1 uppercase">
                          Photo Pending
                        </span>
                      </div>
                    )}
                  </div>

                  <span className="absolute bottom-0 right-1/2 translate-x-12 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-navy-950 text-cyan-400 border border-slate-700 shadow">
                    USN {member.usn.slice(-3)}
                  </span>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-medium mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">
                    USN: {member.usn}
                  </div>
                </div>

                {/* Key Contributions List */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800 mb-6">
                  {member.contributions.map((c, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span className="leading-snug">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social & Contact Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-cyan-400 hover:bg-navy-900 border border-slate-800 transition-colors"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-white hover:bg-navy-900 border border-slate-800 transition-colors"
                  aria-label={`${member.name} GitHub Repository`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-emerald-400 hover:bg-navy-900 border border-slate-800 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Mentorship & Project Leadership Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-700/70">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Faculty Mentorship
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Project Guidance & Academic Leadership
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-navy-950 px-3 py-1.5 rounded-lg border border-slate-800">
              Dept. of CSE (Data Science)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectConfig.mentors.map((mentor, mIdx) => (
              <div
                key={mIdx}
                className="p-5 rounded-2xl bg-navy-950/80 border border-slate-800 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">
                    {mentor.role}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {mentor.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {mentor.designation}, {mentor.department}
                  </p>
                  <p className="text-xs text-slate-400">
                    {mentor.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
