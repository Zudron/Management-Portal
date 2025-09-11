import StaffProfile from '../StaffProfile';

export default function StaffProfileExample() {
  return (
    <div className="p-4 flex justify-center">
      <StaffProfile
        name="Sarah Chen"
        role="Senior Full Stack Developer"
        email="sarah.chen@orgvision.com"
        phone="+1 (555) 123-4567"
        department="Engineering"
        startDate="Jan 2022"
        projects={["OrgVision Dashboard", "API Redesign", "Mobile App"]}
        isManager={true}
      />
    </div>
  );
}