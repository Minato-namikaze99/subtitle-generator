export default function ConfirmationModal({ onConfirm, onCancel }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg text-black">
          <h2 className="text-lg font-semibold mb-4">Confirm Upload</h2>
          <p>Are you sure you want to upload this file for subtitles?</p>
          <div className="flex justify-end mt-4">
            <button className="mr-2 px-4 py-2 bg-red-300 rounded" onClick={onCancel}>
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onConfirm}>
              Yes
            </button>
          </div>
        </div>
      </div>
    );
  }
  