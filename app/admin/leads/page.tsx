import { Suspense } from "react";
import LeadsContent from "./_components/LeadsContent";

function LeadsContentWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando leads...</p>
        </div>
      </div>
    }>
      <LeadsContent />
    </Suspense>
  );
}

export default function LeadsPage() {
  return <LeadsContentWrapper />;
}
