import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { useNavigate } from 'react-router-dom';
import { Save, RotateCcw, ArrowLeft } from 'lucide-react';
import type { WebsiteContent } from '../types/content';

export const Admin: React.FC = () => {
  const { content, updateContent, saveContent, resetContent } = useContent();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'training' | 'contact'>('home');
  const [editContent, setEditContent] = useState<WebsiteContent>(content);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = () => {
    updateContent(editContent);
    saveContent();
    setSaveMessage('Changes saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure? This will reset all changes to defaults.')) {
      resetContent();
      setEditContent(content);
      setSaveMessage('Content reset to defaults');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const updateField = (path: string, value: any) => {
    const keys = path.split('.');
    const newContent = JSON.parse(JSON.stringify(editContent));
    let obj = newContent;

    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]];
    }

    obj[keys[keys.length - 1]] = value;
    setEditContent(newContent);
  };

  const updateArrayItem = (path: string, index: number, field: string, value: any) => {
    const keys = path.split('.');
    const newContent = JSON.parse(JSON.stringify(editContent));
    let obj = newContent;

    for (let i = 0; i < keys.length; i++) {
      obj = obj[keys[i]];
    }

    if (Array.isArray(obj) && obj[index]) {
      obj[index][field] = value;
      setEditContent(newContent);
    }
  };

  return (
    <div className="min-h-screen bg-uts-navy flex flex-col">
      {/* Header */}
      <div className="bg-uts-blue text-white p-6 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-gold text-uts-navy px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            <ArrowLeft size={20} />
            Return to Website
          </button>
        </div>
        <h1 className="text-4xl font-bold">Website Editor</h1>
        <div className="text-sm text-gray-200">No coding required</div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-48 bg-slate-800 border-r-4 border-gold overflow-y-auto">
          <div className="p-6 space-y-3">
            {['home', 'about', 'training', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-gold text-uts-navy'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 border-t-2 border-gold space-y-3">
            <button
              onClick={handleSave}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              <Save size={20} />
              Save Changes
            </button>
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <RotateCcw size={20} />
              Reset to Defaults
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-4xl">
            {/* Save Message */}
            {saveMessage && (
              <div className="mb-6 p-4 bg-green-500 text-white rounded-lg font-semibold">
                {saveMessage}
              </div>
            )}

            {/* HOME TAB */}
            {activeTab === 'home' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Home Page Settings</h2>

                <div>
                  <label className="block text-gold font-bold mb-2">Hero Image URL</label>
                  <input
                    type="text"
                    value={editContent.home.heroImage}
                    onChange={(e) => updateField('home.heroImage', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Tagline</label>
                  <input
                    type="text"
                    value={editContent.home.tagline}
                    onChange={(e) => updateField('home.tagline', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Description</label>
                  <textarea
                    value={editContent.home.description}
                    onChange={(e) => updateField('home.description', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Classes Description</label>
                  <textarea
                    value={editContent.home.classesDescription}
                    onChange={(e) => updateField('home.classesDescription', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Aims Description</label>
                  <textarea
                    value={editContent.home.aimsDescription}
                    onChange={(e) => updateField('home.aimsDescription', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-4">Reasons to Join</label>
                  <div className="space-y-3">
                    {editContent.home.reasonsToJoin.map((reason, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={reason}
                        onChange={(e) => {
                          const newReasons = [...editContent.home.reasonsToJoin];
                          newReasons[idx] = e.target.value;
                          updateField('home.reasonsToJoin', newReasons);
                        }}
                        placeholder={`Reason ${idx + 1}`}
                        className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ABOUT TAB */}
            {activeTab === 'about' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">About Page Settings</h2>

                <div>
                  <label className="block text-gold font-bold mb-2">Hero Image URL</label>
                  <input
                    type="text"
                    value={editContent.about.heroImage}
                    onChange={(e) => updateField('about.heroImage', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Taekwondo Description</label>
                  <textarea
                    value={editContent.about.taekwondoDescription}
                    onChange={(e) => updateField('about.taekwondoDescription', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">History</label>
                  <textarea
                    value={editContent.about.history}
                    onChange={(e) => updateField('about.history', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Committee Image URL</label>
                  <input
                    type="text"
                    value={editContent.about.committeeImage}
                    onChange={(e) => updateField('about.committeeImage', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <h3 className="text-gold font-bold text-xl mb-4">Committee Members</h3>
                  <div className="space-y-4">
                    {editContent.about.committeeMembers.map((member, idx) => (
                      <div key={idx} className="bg-slate-700 p-4 rounded-lg space-y-2">
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => updateArrayItem('about.committeeMembers', idx, 'name', e.target.value)}
                          placeholder="Name"
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                        />
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => updateArrayItem('about.committeeMembers', idx, 'role', e.target.value)}
                          placeholder="Role"
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                        />
                        <input
                          type="email"
                          value={member.email || ''}
                          onChange={(e) => updateArrayItem('about.committeeMembers', idx, 'email', e.target.value)}
                          placeholder="Email (optional)"
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-gold font-bold text-xl mb-4">Tenets</h3>
                  <div className="space-y-4">
                    {editContent.about.tenets.map((tenet, idx) => (
                      <div key={idx} className="bg-slate-700 p-4 rounded-lg space-y-2">
                        <input
                          type="text"
                          value={tenet.englishName}
                          onChange={(e) => updateArrayItem('about.tenets', idx, 'englishName', e.target.value)}
                          placeholder="English Name"
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                        />
                        <textarea
                          value={tenet.description}
                          onChange={(e) => updateArrayItem('about.tenets', idx, 'description', e.target.value)}
                          placeholder="Description"
                          rows={2}
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold resize-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TRAINING TAB */}
            {activeTab === 'training' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Training Page Settings</h2>

                <div>
                  <label className="block text-gold font-bold mb-2">Hero Image URL</label>
                  <input
                    type="text"
                    value={editContent.training.heroImage}
                    onChange={(e) => updateField('training.heroImage', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Classes Intro</label>
                  <textarea
                    value={editContent.training.classesIntro}
                    onChange={(e) => updateField('training.classesIntro', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Beginner Tip</label>
                  <input
                    type="text"
                    value={editContent.training.beginnerTip}
                    onChange={(e) => updateField('training.beginnerTip', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Location</label>
                  <input
                    type="text"
                    value={editContent.training.location}
                    onChange={(e) => updateField('training.location', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Grading Price ($)</label>
                  <input
                    type="number"
                    value={editContent.training.gradingPrice}
                    onChange={(e) => updateField('training.gradingPrice', Number(e.target.value))}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">AT Registration Price ($)</label>
                  <input
                    type="number"
                    value={editContent.training.atRegistration}
                    onChange={(e) => updateField('training.atRegistration', Number(e.target.value))}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <h3 className="text-gold font-bold text-xl mb-4">Schedule</h3>
                  <div className="space-y-4">
                    {editContent.training.schedule.map((entry, idx) => (
                      <div key={idx} className="bg-slate-700 p-4 rounded-lg space-y-2">
                        <input
                          type="text"
                          value={entry.day}
                          onChange={(e) => updateArrayItem('training.schedule', idx, 'day', e.target.value)}
                          placeholder="Day"
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                        />
                        <input
                          type="text"
                          value={entry.time}
                          onChange={(e) => updateArrayItem('training.schedule', idx, 'time', e.target.value)}
                          placeholder="Time"
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                        />
                        <input
                          type="text"
                          value={entry.activities}
                          onChange={(e) => updateArrayItem('training.schedule', idx, 'activities', e.target.value)}
                          placeholder="Activities"
                          className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-gold font-bold text-xl mb-4">Pricing</h3>
                  <div className="space-y-4">
                    {editContent.training.pricing.map((plan, idx) => (
                      <div key={idx} className="bg-slate-700 p-4 rounded-lg space-y-2 flex gap-2 items-end">
                        <div className="flex-1">
                          <label className="block text-sm text-gray-300 mb-1">Plan Name</label>
                          <input
                            type="text"
                            value={plan.name}
                            onChange={(e) => updateArrayItem('training.pricing', idx, 'name', e.target.value)}
                            className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                          />
                        </div>
                        <div className="w-28">
                          <label className="block text-sm text-gray-300 mb-1">Price</label>
                          <input
                            type="number"
                            value={plan.price}
                            onChange={(e) => updateArrayItem('training.pricing', idx, 'price', Number(e.target.value))}
                            className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-gold font-bold text-xl mb-4">Uniform & Equipment</h3>
                  <div className="space-y-4">
                    {editContent.training.uniformAndEquipment.map((item, idx) => (
                      <div key={idx} className="bg-slate-700 p-4 rounded-lg space-y-2 flex gap-2 items-end">
                        <div className="flex-1">
                          <label className="block text-sm text-gray-300 mb-1">Item Name</label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) =>
                              updateArrayItem('training.uniformAndEquipment', idx, 'name', e.target.value)
                            }
                            className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                          />
                        </div>
                        <div className="w-28">
                          <label className="block text-sm text-gray-300 mb-1">Price</label>
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) =>
                              updateArrayItem('training.uniformAndEquipment', idx, 'price', Number(e.target.value))
                            }
                            className="w-full px-4 py-2 bg-slate-600 text-white border-2 border-slate-500 rounded-lg focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CONTACT TAB */}
            {activeTab === 'contact' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Page Settings</h2>

                <div>
                  <label className="block text-gold font-bold mb-2">Hero Image URL</label>
                  <input
                    type="text"
                    value={editContent.contact.heroImage}
                    onChange={(e) => updateField('contact.heroImage', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Email</label>
                  <input
                    type="email"
                    value={editContent.contact.email}
                    onChange={(e) => updateField('contact.email', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Discord URL</label>
                  <input
                    type="text"
                    value={editContent.contact.discordUrl}
                    onChange={(e) => updateField('contact.discordUrl', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Instagram Handle</label>
                  <input
                    type="text"
                    value={editContent.contact.instagramHandle}
                    onChange={(e) => updateField('contact.instagramHandle', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">President Email</label>
                  <input
                    type="email"
                    value={editContent.contact.presidentEmail}
                    onChange={(e) => updateField('contact.presidentEmail', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Treasurer Email</label>
                  <input
                    type="email"
                    value={editContent.contact.treasurerEmail}
                    onChange={(e) => updateField('contact.treasurerEmail', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Location</label>
                  <input
                    type="text"
                    value={editContent.contact.location}
                    onChange={(e) => updateField('contact.location', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-gold font-bold mb-2">Location Details</label>
                  <input
                    type="text"
                    value={editContent.contact.locationDetails}
                    onChange={(e) => updateField('contact.locationDetails', e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 text-white border-2 border-slate-600 rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
